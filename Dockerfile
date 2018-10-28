FROM alpine
CMD ["cat","/proc/self/cgroup | grep pids"]
