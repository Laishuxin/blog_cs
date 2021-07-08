package lazy;

/**
 * Project  1-singleton
 * File     null.java
 *
 * @author LaiShuXin
 * @time 2021-07-04 17:01
 */
public class Singleton3 {
    private static volatile Singleton3 singleton;

    private Singleton3()  {}

    @Override
    public String toString() {
        return "Singleton1";
    }

    public static Singleton3 getInstance() {
        if (Singleton3.singleton == null) {
            synchronized (Singleton3.class) {
                if (Singleton3.singleton == null) {
                    Singleton3.singleton = new Singleton3();
                }
            }
        }
        return Singleton3.singleton;
    }
}
