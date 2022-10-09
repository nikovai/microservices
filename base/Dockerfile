FROM node:alpine

WORKDIR /app

COPY package.json ./

# RUN npm install --only=production
RUN if["$NODE_ENV"="development"]; \
        then npm install; \
        else npm install --only=production; \
        fi

COPY ./ ./

ENV PORT 5500

EXPOSE $PORT

CMD ["node","app.js"]
