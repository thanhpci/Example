def sum_of_top_two(arr):
    if len(arr) == 0:
        return 0

    if len(arr) == 1:
        return arr[0]

    first = float('-inf')
    second = float('-inf')
    
    for num in arr:
        if num > first:
            second = first
            first = num
        elif num > second:
            second = num
    
    return first + second




def main():
    test_cases = [
        ([], 0),                       
        ([5], 5),                      
        ([1, 4, 2, 3, 5], 9),          
        ([10, 20, 30, 40], 70),       
        ([99, 0, 1, 2], 101),          
        ([100, 50], 150),              
        ([-10, -20, -30, -40], -30),   
        ([1, 2], 3),                   
        ([5, 5, 5, 5], 10),           
        ([0, -1, -2, -3], -1),         
    ]

    for i, (arr, expected) in enumerate(test_cases, 1):
        result = sum_of_top_two(arr)
        print(f"Test case {i}: {'Passed' if result == expected else 'Failed'}")
        print(f"  Input: {arr}")
        print(f"  Expected Output: {expected}")
        print(f"  Actual Output: {result}")
        print('-' * 50)


main()