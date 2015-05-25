def main():
    compilation_errors_count = input()
    all_errors_sum = sum(map(int, input().split()))
    after_first_fix_sum = sum(map(int, input().split()))
    after_second_fix_sum = sum(map(int, input().split()))

    print(all_errors_sum - after_first_fix_sum)
    print(after_first_fix_sum - after_second_fix_sum)

if __name__ == '__main__':
    main()
