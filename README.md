# Bit.Blue
Advanced Bitcoin Management

### Installation
####1. Database
Install MongoDB by creating a new file called `nano mongodb.sh` and running it like so `bash mongodb.sh`
    apt-key adv --keyserver keyserver.ubuntu.com --recv 7F0CEB10
    echo "deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen" | tee -a /etc/apt/sources.list.d/10gen.list
    apt-get -y update
    apt-get -y install mongodb-10gen

####2. NodeJS
You can use NVM to install a stable version of NodeJS and use Nodemon or Forever to keep the process alive
	apt-get install npm
	npm install -g nodemon
	nodemon

