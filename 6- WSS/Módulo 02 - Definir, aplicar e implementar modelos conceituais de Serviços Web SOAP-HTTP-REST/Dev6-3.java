import javax.jws.WebMethod;
import javax.jws.WebService;
import javax.xml.ws.Endpoint;

@WebService
public class MySoapServer {

    @WebMethod
    public String sayHello(String name) {
        return "Hello, " + name + "!";
    }

    @WebMethod
    public int addNumbers(int a, int b) {
        return a + b;
    }

    @WebMethod
    public double convertCelsiusToFahrenheit(double celsius) {
        return (celsius * 1.8) + 32;
    }

    @WebMethod
    public boolean isPrimeNumber(int number) {
        if (number < 2) {
            return false;
        }
        for (int i = 2; i <= number / 2; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        Endpoint.publish("http://localhost:8080/mysoapserver", new MySoapServer());
        System.out.println("SOAP server started at http://localhost:8080/mysoapserver");
    }
}
