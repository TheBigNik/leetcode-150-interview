list = input().split()

containers = [int(list[0]), int(list[1]), int(list[2])]

count = 0

def move(x, amount):
    x[-1] -= amount
    x[0] += amount
    return x

def sorted_container(x):
    x = sorted(x)
    return x

def average(x):
    return (x[0] + x[1] + x[2]) / 3

while not (containers[0] == containers[1] and containers[1] == containers[2]):
    containers = sorted_container(containers)
    mv = containers[-1] - average(containers)
    containers = move(containers, mv)
    count += 1

print(count)