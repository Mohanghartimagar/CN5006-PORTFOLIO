package methodoverloadingg;

public class BubbleSortExample {
    public static void main(String[] args) {
        int arr[] = {93, 42, 51, 3, 455, 20, 5, 100, 5487, 87, 96, 21};

        // Perform Bubble Sort
        bubbleSort(arr);

        // Print the sorted array
        System.out.println("Sorted array:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }

    // Bubble Sort function
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) { // Outer loop for each pass
            for (int j = 0; j < n - i - 1; j++) { // Inner loop for comparing adjacent elements
                // Swap if the element found is greater than the next element
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
}
