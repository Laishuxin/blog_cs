package lazy;

/**
 * Project  1-singleton
 * File     null.java
 *
 * @author LaiShuXin
 * @time 2021-07-04 17:00
 */
public class Entry {
    public static void main(String[] args) {
        Singleton1 singleton = Singleton1.getInstance();
        System.out.println(singleton);
    }
}
