# Taken from https://www.geeksforgeeks.org/twitter-sentiment-analysis-using-python/
import re
import tweepy
from tweepy import OAuthHandler
from textblob import TextBlob

from secrets import *


class TwitterClient(object):
    ''' 
    Generic Twitter Class for sentiment analysis. 
    '''

    def __init__(self):
        ''' 
        Class constructor or initialization method. 
        '''
        # keys and tokens from the Twitter Dev Console
        consumer_key = consumer_api_key
        consumer_secret = consumer_api_secret_key
        access_token = twitter_access_token
        access_token_secret = twitter_access_token_secret

        # attempt authentication
        try:
            # create OAuthHandler object
            self.auth = OAuthHandler(consumer_key, consumer_secret)
            # set access token and secret
            self.auth.set_access_token(access_token, access_token_secret)
            # create tweepy API object to fetch tweets
            self.api = tweepy.API(self.auth)
        except:
            print("Error: Authentication Failed")

    def clean_tweet(self, tweet):
        ''' 
        Utility function to clean tweet text by removing links, special characters 
        using simple regex statements. 
        '''
        return ' '.join(re.sub("(@[A-Za-z0-9]+)|([^0-9A-Za-z \t])|(\w+:\/\/\S+)", " ", tweet).split())

    def get_tweet_sentiment(self, tweet):
        ''' 
        Utility function to classify sentiment of passed tweet 
        using textblob's sentiment method 
        '''
        # create TextBlob object of passed tweet text
        analysis = TextBlob(self.clean_tweet(tweet))
        # set sentiment
        if analysis.sentiment.polarity > 0:
            return 'positive'
        elif analysis.sentiment.polarity == 0:
            return 'neutral'
        else:
            return 'negative'

    def get_tweets(self, query, count=10):
        ''' 
        Main function to fetch tweets and parse them. 
        '''
        # empty list to store parsed tweets
        tweets = []

        try:
            # call twitter api to fetch tweets
            fetched_tweets = self.api.search(q=query, count=count)

            # parsing tweets one by one
            for tweet in fetched_tweets:
                # empty dictionary to store required params of a tweet
                parsed_tweet = {}

                # saving text of tweet
                parsed_tweet['text'] = tweet.text

                # saving sentiment of tweet
                parsed_tweet['sentiment'] = self.get_tweet_sentiment(
                    tweet.text)

                # appending parsed tweet to tweets list
                if tweet.retweet_count > 0:
                    # if tweet has retweets, ensure that it is appended only once
                    if parsed_tweet not in tweets:
                        tweets.append(parsed_tweet)
                else:
                    tweets.append(parsed_tweet)

            # return parsed tweets
            return tweets

        except tweepy.TweepError as e:
            # print error (if any)
            print("Error : " + str(e))


def main(name, count_value=200):
    # creating object of TwitterClient Class
    api = TwitterClient()

    # calling function to get tweets
    tweets = api.get_tweets(query=name, count=count_value)
    total_tweets_len = len(tweets)

    # picking positive tweets from tweets
    positive_tweets = [
        tweet for tweet in tweets if tweet['sentiment'] == 'positive']
    positive_tweets_len = len(positive_tweets)

    # percentage of positive tweets
    positive_tweets_percentage = round(
        100*positive_tweets_len/total_tweets_len, 2)
    print("Positive tweets percentage: {} %".format(positive_tweets_percentage))

    # picking negative tweets from tweets
    negative_tweets = [
        tweet for tweet in tweets if tweet['sentiment'] == 'negative']
    negative_tweets_len = len(negative_tweets)

    # percentage of negative tweets
    negative_tweets_percentage = round(
        100*negative_tweets_len/total_tweets_len, 2)
    print("Negative tweets percentage: {} %".format(negative_tweets_percentage))

    # percentage of neutral tweets
    neutral_tweets_len = total_tweets_len - \
        (positive_tweets_len + negative_tweets_len)
    neutral_tweets_percentage = round(
        100*neutral_tweets_len/total_tweets_len, 2)
    print("Neutral tweets percentage: {} %".format(neutral_tweets_percentage))

    result = {
        "positive": positive_tweets_percentage,
        "neutral": neutral_tweets_percentage,
        "negative": negative_tweets_percentage
    }

    return result

    # # printing first 5 positive tweets
    # print("\n\nPositive tweets:")
    # for tweet in positive_tweets[:10]:
    #     print(tweet['text'])

    # # printing first 5 negative tweets
    # print("\n\nNegative tweets:")
    # for tweet in negative_tweets[:10]:
    #     print(tweet['text'])


if __name__ == "__main__":
    # calling main function
    ans = main('Donald Trump', 200)
    print(ans)
