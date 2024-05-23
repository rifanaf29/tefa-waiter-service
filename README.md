# TEFA Waiter Service

## Environment Variables
Name     | Desc
---------|-------------
AMQP_URL | RabbitMQ URL

## Prerequisite
> * NodeJS 20
> * RabbitMQ

## Getting Started
> * Clone the repository
```bash
git clone https://github.com/Join-Sistem/tefa-waiter-service.git
```
> * Install dependencies
```bash
cd tefa-waiter-service
npm install
```
> * Run the project
```bash
npm start
```

## Usages

> * Check the console logs, should be received messages from tefa-kitchen-service

```bash
Food & Beverages received: {"name":"Bambang","food":"Mie Goreng","beverage":"Jeruk Es","table_number":"01"}
```
> * wait for 5s
```bash
Order Served!
```