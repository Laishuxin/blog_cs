package lazy;

/**
 * Project  1-singleton
 * File     null.java
 *
 * @author LaiShuXin
 * @time 2021-07-04 17:01
 */
public class Singleton2 {
    private static Singleton2 singleton;

    private Singleton2()  {}

    @Override
    public String toString() {
        return "Singleton1";
    }

    public static synchronized Singleton2 getInstance() {
        if (Singleton2.singleton == null) {
            Singleton2.singleton = new Singleton2();
        }
        return Singleton2.singleton;
    }
}
