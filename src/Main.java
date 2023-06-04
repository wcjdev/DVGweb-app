import model.Artist;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {

        Artist hEAD = new Artist("hEAD", "artist", "none", "hEAD", "digital-art",
                "2dvnt", "wwjaansn", new ArrayList<>());
        hEAD.setuser_id(0);
        System.out.println("Hello " + hEAD.getUsername() + " user "+ hEAD.getuser_id());

    }
}