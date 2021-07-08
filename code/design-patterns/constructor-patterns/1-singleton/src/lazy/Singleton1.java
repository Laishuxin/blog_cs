package lazy;

/**
 * Project  1-singleton
 * File     null.java
 *
 * @author LaiShuXin
 * @time 2021-07-04 17:01
 */
public class Singleton1 {
    private static Singleton1 singleton;

    private Singleton1()  {}

    @Override
    public String toString() {
        return "Singleton1";
    }

    public static Singleton1 getInstance() {
        if (Singleton1.singleton == null) {
            Singleton1.singleton = new Singleton1();
        }
        return Singleton1.singleton;
    }
}
