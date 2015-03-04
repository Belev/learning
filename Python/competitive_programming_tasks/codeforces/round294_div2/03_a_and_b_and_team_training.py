def formula_solution(experienced_count, newbies_count):
    return min(experienced_count, newbies_count, (experienced_count + newbies_count) // 3)


def count_groups(more, less):
    groups = 0

    while more - 2 >= 0 and less - 1 >= 0:
        groups += 1
        more -= 2
        less -= 1

        if more < less:
            # change more and less values
            more ^= less
            less ^= more
            more ^= less

    return groups


def main():
    experienced_count, newbies_count = map(int, input().split())

    groups = count_groups(max(experienced_count, newbies_count), min(experienced_count, newbies_count))
    print(groups)


if __name__ == '__main__':
    main()
