def get_figures_weights():
    figures = {}
    figures['q'] = 9
    figures['r'] = 5
    figures['b'] = 3
    figures['n'] = 3
    figures['p'] = 1
    figures['k'] = 0
    figures['.'] = 0
    return figures


def main():
    CHESS_BOARD_SIZE = 8

    weight_difference = 0
    figures = get_figures_weights()

    for i in range(CHESS_BOARD_SIZE):
        line = input()

        # get figure negative weight if it is black player piece
        weight_difference += sum(map(lambda s: -figures[s] if s.islower() else figures[s.lower()], line))

    if weight_difference > 0:
        print('White')
    elif weight_difference < 0:
        print('Black')
    else:
        print('Draw')

if __name__ == '__main__':
    main()
