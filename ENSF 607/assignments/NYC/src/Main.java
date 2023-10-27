import java.io.IOException;
import java.util.List;

/**
 * Main entry point for the ride data analysis application.
 * It utilizes various components to load, analyze, and display ride data.
 */
public class Main {
    /**
     * The main method that drives the application.
     * It creates instances of FileHandler, DataLoader, and DataAnalyzer to process ride data.
     * Ride data is read from a CSV file, loaded into Ride objects, and then analyzed.
     * The results of the analysis are displayed to the console.
     *
     * @param args command line arguments (not used)
     * @throws IOException if there is an issue reading the CSV file
     */
    public static void main(String[] args) throws IOException {
        // Dependencies are now inverted and depend on abstractions
        IFileHandler fileHandler = new FileHandler();
        IDataLoader dataLoader = new DataLoader();
        IDataAnalyzer dataAnalyzer = new DataAnalyzer();

        // Read raw ride data from a CSV file
        List<String[]> rawData = fileHandler.readCsv("train_99.csv");

        // Load the raw data into Ride objects
        List<Ride> rides = dataLoader.load(rawData);

        // Ride premium = new PremiumRide();
        // rides.add(premium);

        // Analyze the ride data and display the average trip duration
        double averageDuration = dataAnalyzer.averageTripDuration(rides);
        System.out.println("Average Trip Duration: " + averageDuration);
    }
}
