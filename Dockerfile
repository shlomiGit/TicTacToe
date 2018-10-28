FROM alpine
CMD ["echo","cat /proc/self/cgroup | grep pids"]