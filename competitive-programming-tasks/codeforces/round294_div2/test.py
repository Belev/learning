def calculate_height(N):
    tree_height = 1
    is_spring_cycle = True

    for cycle in range(N):
        if is_spring_cycle:
            tree_height *= 2
        else:
            tree_height += 1

        is_spring_cycle = not is_spring_cycle
    return tree_height


def main():
    print(calculate_height(11))

if __name__ == '__main__':
    main()
