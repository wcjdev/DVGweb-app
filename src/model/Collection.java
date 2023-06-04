package model;

import controller.ImageLoader;

import java.lang.reflect.Array;
import java.util.ArrayList;

public abstract class Collection implements ImageLoader {

        private String collectionName;
        private String genre;
        private Artist artist;
        private ArrayList<Art>collection;

        public Collection() {
        }

        public Collection(String collectionName, String genre, Artist artist, ArrayList<Art> collection) {
                this.collectionName = collectionName;
                this.genre = genre;
                this.artist = artist;
                this.collection = collection;
        }

        public String getCollectionName() {
                return collectionName;
        }

        public void setCollectionName(String collectionName) {
                this.collectionName = collectionName;
        }

        public String getGenre() {
                return genre;
        }

        public void setGenre(String genre) {
                this.genre = genre;
        }

        public Artist getArtist() {
                return artist;
        }

        public void setArtist(Artist artist) {
                this.artist = artist;
        }

        public ArrayList<Art> getCollection() {
                ArrayList<Art>collection = new<Art>ArrayList();
                return collection;
        }

        public void setCollection(ArrayList<Art> collection) {
                this.collection = collection;
        }
}
