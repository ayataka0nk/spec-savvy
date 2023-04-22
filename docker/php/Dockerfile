FROM php:8.1-apache

ARG WWWUSER
ARG WWWGROUP

RUN apt-get update \
    && apt-get install -y libpng-dev zlib1g-dev unzip libonig-dev \
    && docker-php-ext-install pdo_mysql mysqli mbstring gd iconv

RUN  a2enmod rewrite

# Install composer
RUN curl -sS https://getcomposer.org/installer | php
RUN mv composer.phar /usr/local/bin/composer

COPY /sites-available/000-default.conf /etc/apache2/sites-available/000-default.conf

# 実行ユーザの作成
RUN addgroup --system --gid $WWWGROUP mygroup
RUN adduser --system --uid $WWWUSER --ingroup mygroup myuser
USER myuser
