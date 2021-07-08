package Clone;

/**
 * Project  1-singleton
 * File     null.java
 *
 * @author LaiShuXin
 * @time 2021-07-05 21:36
 */
public class Entry {
    public static void test1() {
        Prototype p0 = new Prototype("Tom", 1);
        Prototype p1 = (Prototype) p0.clone();
        Prototype p2 = p0.clone();
    }

    public static void test2() {
        Prototype p0 = new Prototype("Tom", 1, new Prototype("jack", 2));
        Prototype p1 = (Prototype) p0.clone();
        Prototype p2 = p0.clone();
        System.out.println(p0.p.hashCode());
        System.out.println(p1.p.hashCode());
        System.out.println(p0.p.hashCode() == p1.p.hashCode());
        /*
          189568618
          189568618
          true
         */
    }

    public static void main(String[] args) {
//        test1();
        test2();
    }
}
