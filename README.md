# docker-demo

small docker demo used on the presentation

1. Install [Vagrant](https://www.vagrantup.com/docs/getting-started/) and start the vm with `vagrant up`

2. Build the image and run with

    `docker build -t demo-cats .`

    `docker run -i -p 80:80 demo-cats`
