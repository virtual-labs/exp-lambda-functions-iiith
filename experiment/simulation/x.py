from functools import reduce

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
squares = list(map(lambda x: x * x, numbers))
filtered = list(filter(lambda x: not (x % 2), squares))
summed = reduce(lambda x, y: x + y, filtered)

print(squares, filtered, summed)
