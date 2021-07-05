package Series;

/**
 * Project  1-singleton
 * File     null.java
 *
 * @author LaiShuXin
 * @time 2021-07-05 21:31
 */
public class Prototype implements Cloneable {
    private String name;
    private int id;
    Prototype p;

    public Prototype(String name, int id) {
        this.name = name;
        this.id = id;
    }

    public Prototype(String name, int id, Prototype p) {
        this.name = name;
        this.id = id;
        this.p = p;
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
    protected Prototype clone() {
        Prototype prototype = null;
        try {
            Object obj = super.clone();
            prototype = (Prototype)obj;
            if (prototype.p != null) {
                prototype.p = this.p.clone();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return prototype;
    }

    @Override
    public String toString() {
        return "name: " + this.name + ", id: " + this.id;
    }
}
