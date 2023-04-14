#include<iostream>
using namespace std;

int main(){
    vectot<int> ratings;
      vector<int> v(ratings.size(),1);
        for(int i=0;i<ratings.size();i++){
            if((ratings[i-1]<ratings[i]))
                v[i+1]++; 
               if(ratings[i-1]>ratings[i])
               v[i+1]++; 
               }
        int t=accumulate(v.begin(),v.end(),0);
        return t;
}