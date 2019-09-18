
FROM alpine/git:latest

LABEL "maintainer"="Maximilian Held <app@dillon.com>"
LABEL "repository"="http://github.com/dillon/neat-maps"
LABEL "homepage"="http://github.com/dillon/neat-maps"

LABEL "com.github.actions.name"="GitHub Pages Deploy"
LABEL "com.github.actions.description"="Deploy static assets to GitHub Pages."
LABEL "com.github.actions.icon"="upload-cloud"
LABEL "com.github.actions.color"="blue"

ADD entrypoint.sh /entrypoint.sh
ENTRYPOINT ["sh", "/entrypoint.sh"]