package model;

import controller.ImageLoader;

import java.awt.image.ImageProducer;
import java.io.InputStream;

public abstract class Art implements ImageLoader {

    private Integer id;
    private Artist artist;
    private String title;
    private String genre;

    private ImageProducer images;
    private Collection collection;
    private String source;

    public Art(Integer id) {
        this.id = id;
    }


    public Art(Integer id, Artist artist, String title, String genre, ImageProducer images, Collection collection, String source) {
        this.id = id;
        this.artist = artist;
        this.title = title;
        this.genre = genre;
        this.images = images;
        this.collection = collection;
        this.source = source;
    }

    public static void ImageLoader() {

        String relName = "Images/";

        InputStream items = Art.class.getResourceAsStream(relName);

    }
    public Integer getId(){
        return id;
    }
    public Integer setId(Integer prevId){
        this.id = prevId + 1;
        return id;
    }

    public Artist getArtist() { return artist; }

    public void setArtist(Artist artist) {
        this.artist = artist;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public Collection getCollection() {
        return collection;
    }

    public void setCollection(Collection collection) {
        this.collection = collection;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

}
