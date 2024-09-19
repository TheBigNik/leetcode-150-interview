def canJump(nums=[3,2,1,0,4]):
    player = 0
    i = 1
    player_movements = [j for j in range(0, nums[0]+1)]
    all_steps = len(nums)
    print(player_movements)
    for _ in range(len(player_movements)):
        player = player + player_movements[-i]
        if player >= all_steps:
            return True
        elif nums[player] == 0 and player < all_steps:
            return False
        i += 1






canJump()