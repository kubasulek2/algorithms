# Comparison function used to  
# sort preSum vector.  
def compare(a, b):  
  
    if a[0] == b[0]:  
        return a[1] < b[1]  
  
    return a[0] < b[0]  
  
# Function to find index in preSum vector  
# upto which all prefix sum values are less  
# than or equal to val.  
def findInd(preSum, n, val):  
  
    # Starting and ending index of  
    # search space.  
    l, h = 0, n - 1
  
    # To store required index value.  
    ans = -1
  
    # If middle value is less than or equal   
    # to val then index can lie in mid+1..n  
    # else it lies in 0..mid-1.  
    while l <= h:  
        mid = (l + h) // 2
        if preSum[mid][0] <= val:  
            ans = mid  
            l = mid + 1
          
        else: 
            h = mid - 1
  
    return ans  
  
# Function to find largest subarray having 
# sum greater than or equal to k.  
def largestSub(arr, n, k):  
  
    # Length of largest subarray.  
    maxlen = 0
  
    # Vector to store pair of prefix sum  
    # and corresponding ending index value.  
    preSum = []  
  
    # To store the current value of prefix sum.  
    Sum = 0
  
    # To store minimum index value in range  
    # 0..i of preSum vector.  
    minInd = [None] * (n)  
  
    # Insert values in preSum vector.  
    for i in range(0, n):  
        Sum = Sum + arr[i]  
        preSum.append([Sum, i])  
      
    preSum.sort() 
      
    # Update minInd array.  
    minInd[0] = preSum[0][1]  
  
    for i in range(1, n):  
        minInd[i] = min(minInd[i - 1],  
                        preSum[i][1])  
      
    Sum = 0
    for i in range(0, n):  
        Sum = Sum + arr[i]  
  
        # If sum is greater than k, then  
        # answer is i+1.  
        if Sum > k: 
            maxlen = i + 1
  
        # If sum is less than or equal to k,  
        # then find if there is a prefix array  
        # having sum that needs to be added to 
        # current sum to make its value greater  
        # than k. If yes, then compare length  
        # of updated subarray with maximum  
        # length found so far.  
        else: 
            ind = findInd(preSum, n, Sum - k - 1)  
            if ind != -1 and minInd[ind] < i:  
                maxlen = max(maxlen, i - minInd[ind])  
  
    return maxlen  
  
# Driver code.  
if __name__ == "__main__": 
  
    arr = [0, 0, 0, 0, 0] 
    n = len(arr)  
  
    k = -1
  
    print(largestSub(arr, n, k))  
      