FROM node:argon

ENV THEDIR /src
ENV PORT 4002
ENV NPM_RIGISTRY https://registry.npm.taobao.org

RUN mkdir -p ${THEDIR}
#RUN cd ${THEDIR}
WORKDIR ${THEDIR}

COPY package.json ${THEDIR}
COPY bower.json ${THEDIR}

# Set time zone to UTC+8
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN npm config set registry ${NPM_RIGISTRY}

RUN npm install -g bower
#RUN echo '{ "allow_root": true }' > /root/.bowerrc

RUN npm install --production --quiet
RUN bower install --allow-root

COPY . ${THEDIR}
EXPOSE ${PORT}

ENV NODE_ENV production

CMD [ "npm", "start" ]