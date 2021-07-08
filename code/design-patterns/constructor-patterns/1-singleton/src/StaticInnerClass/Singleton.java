package StaticInnerClass;

/**
 * Project  1-singleton
 * File     null.java
 *
 * @author LaiShuXin
 * @time 2021-07-04 22:52
 */
public class Singleton {
    private Singleton() {
    }

    private static class InnerClass {
        private static final Singleton instance = new Singleton();
    }

    @Override
    public String toString() {
        return "A singleton";
    }

    public static synchronized  Singleton getInstance() {
        return InnerClass.instance;
    }
}
