import streamlit as st
import time
from sentiment_analysis import predict_sentiment
import src.stream_tweets as streamer

st.title("Real-Time Twitter Sentiment Dashboard")

sentiment_counts = {'positive': 0, 'negative': 0, 'neutral': 0}
st_bar = st.bar_chart([0, 0, 0])

while True:
    while not streamer.TWEET_QUEUE.empty():
        tweet = streamer.TWEET_QUEUE.get()
        sentiment = predict_sentiment(tweet)
        sentiment_counts[sentiment] += 1
        st_bar.add_rows([[sentiment_counts['positive'], sentiment_counts['negative'], sentiment_counts['neutral']]])
    time.sleep(1)