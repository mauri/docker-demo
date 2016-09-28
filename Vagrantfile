# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  
  config.vm.box = "ubuntu/xenial64"
  config.vm.network :private_network, ip: "192.168.68.8"
  config.vm.synced_folder ".", "/demo"
  
  config.vm.provider "virtualbox" do |vb|
      vb.name = "docker-demo"
  end
  
  config.vm.provision "shell", inline: <<-SHELL
    echo '127.0.1.1 ubuntu-xenial' >> /etc/hosts
    apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
    echo 'deb https://apt.dockerproject.org/repo ubuntu-xenial main' > /etc/apt/sources.list.d/docker.list
    apt-get update
    apt-get install -y linux-image-extra-$(uname -r) linux-image-extra-virtual docker-engine
    service docker start
  SHELL
end
