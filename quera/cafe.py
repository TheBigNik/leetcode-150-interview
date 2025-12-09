costumers = int(input())
order_list = []
for costumer in range(costumers):
    order_list.append(input().split())
    
needed_costumers_count = costumer // 2 + 1

i = 0
w = 0
while i < len(order_list):
   if int(order_list[i][0]) + int(order_list[i][1]) > int(order_list[i + 1][0]) + int(order_list[i + 1][1]):
       i += 1
       continue
   else:
       order_list[i], order_list[i + 1] = order_list[i + 1], order_list[i]
       i += 1
       continue

print(order_list)