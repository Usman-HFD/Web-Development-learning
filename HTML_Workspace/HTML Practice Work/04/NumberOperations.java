import java.util.Scanner;

/**
 * Simple console program to read five integers and print their squares and cubes.
 */
public class NumberOperations {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter five integers separated by spaces or newlines:");
        int[] nums = new int[5];
        for (int i = 0; i < 5; i++) {
            if (scanner.hasNextInt()) {
                nums[i] = scanner.nextInt();
            } else {
                System.out.println("Invalid input. Exiting.");
                scanner.close();
                return;
            }
        }

        System.out.print("Numbers: ");
        for (int n : nums) System.out.print(n + " ");
        System.out.println();

        System.out.print("Squares: ");
        for (int n : nums) System.out.print((n * n) + " ");
        System.out.println();

        System.out.print("Cubes: ");
        for (int n : nums) System.out.print((n * n * n) + " ");
        System.out.println();

        scanner.close();
    }
}
