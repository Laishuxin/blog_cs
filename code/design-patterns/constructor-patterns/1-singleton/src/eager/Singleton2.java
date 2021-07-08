package eager;

/**
 * Project  1-singleton
 * File     null.java
 *
 * @author LaiShuXin
 * @time 2021-07-04 16:57
 */
public class Singleton2 {
    private static final Singleton2 singleton;

    static {
        singleton = new Singleton2();
    }

    private Singleton2() {
    }

    public static Singleton2 getInstance() {
        return Singleton2.singleton;
    }

    public final void show() {
        System.out.println("A singleton");
    }
}
