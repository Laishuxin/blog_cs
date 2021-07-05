package eager;

public class Entry {
    public static void main(String[] args) {
        Singleton1 s = Singleton1.getInstance();
        Singleton1 s2 = Singleton1.getInstance();
        s.show();
        System.out.println(s.hashCode() == s2.hashCode());
    }
}
