package eager;

/**
 * Project  1-singleton
 * File     null.java
 *
 * @author LaiShuXin
 * @time 2021-07-04 16:41
 */
public class Singleton1 {
    private final static Singleton1 singleton = new Singleton1();

    private Singleton1() {
    }

    public static Singleton1 getInstance() {
        return Singleton1.singleton;
    }

    public final void show() {
        System.out.println("A singleton");
    }
}
