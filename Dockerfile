FROM node:20 AS build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM node:20-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./  # Cần package.json để yarn start
COPY --from=build /app/vite.config.js ./  # Copy vite.config.js để cấu hình runtime

RUN yarn add @refinedev/cli vite --frozen-lockfile

EXPOSE 5173

CMD ["yarn", "start", "--host", "--port", "5173"]