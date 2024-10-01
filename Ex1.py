def most_frequency(strings):
    count_of_length = {}

    for s in strings:
        length = len(s)
        if length in count_of_length:
            count_of_length[length] += 1
        else:
            count_of_length[length] = 1

    max_frequency = 0
    most_frequency_length = None

    for length, count in count_of_length.items():
        if count > max_frequency or (count == max_frequency and length > most_frequency_length):
            max_frequency = count
            most_frequency_length = length

    result = []
    for s in strings:
        if len(s) == most_frequency_length:
            result.append(s)

    return result



def main():
    test_cases = [
        (['a', 'ab', 'abc', 'cd', 'def', 'gh'], ['ab', 'cd', 'gh']),
        (['one', 'two', 'three', 'four'], ['one', 'two']),
        (['abc', 'de', 'fghi', 'jkl', 'mno'], ['abc', 'jkl', 'mno']),
        ([''], ['']),
        (['a', 'bb', 'ccc', 'dddd'], ['dddd']),
        (['123', '12', '1234', '56'], ['12', '56']),
        (['cat', 'dog', 'elephant'], ['cat', 'dog']),
        (['abc', 'xyz', 'defg', 'hij', 'klm'], ['abc', 'xyz', 'hij', 'klm']),
    ]

    for i, (strings, expected) in enumerate(test_cases, 1):
        result = most_frequency(strings)
        print(f"Test case {i}: {'Passed' if result == expected else 'Failed'}")
        print(f"  Input: {strings}")
        print(f"  Expected Output: {expected}")
        print(f"  Actual Output: {result}")
        print('-' * 50)

main()