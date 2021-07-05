package introduction;

/**
 * Project  1-singleton
 * File     null.java
 *
 * @author LaiShuXin
 * @time 2021-07-05 21:20
 */
public class Prototype {
    private String name;
    private int id;

    public Prototype(String name, int id) {
        this.name = name;
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
       return "name: " + this.name + ", id: " + this.id;
    }
}
