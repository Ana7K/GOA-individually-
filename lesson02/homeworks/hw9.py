lst = [
    [
        1,2,3,4,
        5,6,7,8
    ],
    [
        1,2,3,4,
        5,6,7,8
    ]
]

SUM = 0
for matrix in lst:
    SUM = SUM + sum(matrix)
print (SUM)