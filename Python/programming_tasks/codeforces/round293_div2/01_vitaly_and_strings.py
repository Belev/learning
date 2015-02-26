def vitaly_and_strings(smaller, larger):
    index = len(smaller) - 1
    smaller[index] = get_next_ascii_char(smaller[index])

    while index > 0:
        if smaller[index] > 'z':
            smaller[index] = 'a'
            smaller[index - 1] = get_next_ascii_char(smaller[index - 1])
        index -= 1

    if ''.join(smaller) == ''.join(larger):
        return 'No such string'
    else:
        return ''.join(smaller)


def get_next_ascii_char(character):
    return chr(ord(character) + 1)


def main():
    smaller = input()
    larger = input()

    print(vitaly_and_strings(list(smaller), list(larger)))

if __name__ == '__main__':
    main()
