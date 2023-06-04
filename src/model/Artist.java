package model;

import java.util.ArrayList;

public class Artist extends User {

        private String name;
        public String genre;
        public String studioName;
        public String contact;
        ArrayList<String> artCollections=new <String>ArrayList();

    public Artist(String username, String role, String email, String name, String genre, String studioName, String contact, ArrayList<String> artCollections) {
        super(username, role, email);
        this.name = name;
        this.genre = genre;
        this.studioName = studioName;
        this.artCollections = artCollections;
        this.contact=contact;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getStudioName() {
        return studioName;
    }

    public void setStudioName(String studioName) {
        this.studioName = studioName;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public ArrayList<String> getArtCollections() {
        return artCollections;
    }

    public void setArtCollections(ArrayList<String> artCollections) {
        this.artCollections = artCollections;
    }
}
