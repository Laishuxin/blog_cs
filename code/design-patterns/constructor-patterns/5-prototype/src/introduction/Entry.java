package introduction;

/**
 * Project  1-singleton
 * File     null.java
 *
 * @author LaiShuXin
 * @time 2021-07-05 21:24
 */
public class Entry {
    public static void main(String[] args) {
        Prototype p0 = new Prototype("Tom", 1);

        final Clone clone = new Clone();
        Prototype p1 = clone.clone(p0);
        Prototype p2 = clone.clone(p0);
        System.out.println(p0);
        System.out.println(p1);
        System.out.println(p2);
    }
}
