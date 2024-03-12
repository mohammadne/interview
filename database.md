# Database

- Sharding and Clustering

## SQL

- ACID in transactions
- <https://www.databricks.com/glossary/acid-transactions>
- <https://fauna.com/blog/database-transaction>
- [isolation level (I in ACID)](https://planetscale.com/blog/mysql-isolation-levels-and-how-they-work)

- In master-slave architecture for sql databases how we ensure consistency if one of the slaves failed and the recent data can't be updated there?
  - Asynchronous Replication with Monitoring
  - Quorum-Based Replication

- SQL vs NoSQL
- normalization vs denormalization
- type of indexes -> hash-index, bplus-tree
- transaction workflow in MongoDB
- joins
- PK vs FK
- cardinality
- denormalization
- Indexing
- How select best database (CAP)
- DB solutions for event store?
- Mysql vs MariaDB vs Postgresql?

## Redis

- redis sentinal vs cluster
- distributed locking in redis
- version 6 benefits
- What is thread-io
- pub/sub, other data structure
- type of deployment or make it HA
- how TTL is implemented? is it configurable?

## ETCD

- [RAFT algorithm](https://raft.github.io/)
- leader election

## Ceph

- paxos algorithm
- RBD
- RADOSGW

## Cassandra

- ring design
- replication factor?
