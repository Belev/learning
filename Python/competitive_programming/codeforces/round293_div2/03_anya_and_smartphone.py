def main():
    n, m, k = map(int, input().split())
    icons = list(map(int, input().split()))
    icons_for_launch_positions = list(map(int, input().split()))

    gestures = m
    positions = [0] * (n + 1)

    for i in range(0, len(icons)):
        positions[icons[i]] = i

    for icon in icons_for_launch_positions:
        gestures += (positions[icon] // k)

        if positions[icon] != 0:
            previous_icon = icons[positions[icon] - 1]

            swap(icons, positions[icon], positions[previous_icon])
            swap(positions, icon, previous_icon)

    print(gestures)


def swap(collection_list, first_index, second_index):
    temp = collection_list[first_index]
    collection_list[first_index] = collection_list[second_index]
    collection_list[second_index] = temp


if __name__ == '__main__':
    main()
