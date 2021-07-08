package introduction;

/**
 * Project  1-singleton
 * File     null.java
 *
 * @author LaiShuXin
 * @time 2021-07-05 21:23
 */
public class Clone {
    public Prototype clone(Prototype prototype) {
        return new Prototype(prototype.getName(), prototype.getId());
    }
}
