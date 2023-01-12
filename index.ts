class Dict<TKey, TValue> {
    private keys: TKey[] = [];
    private values : TValue[] = [];
    Get(key:TKey, _default:TValue|null = null) {
        let index = this.GetToIndex(key);
        if (index == -1) return _default;
        else return this.values[index];
    }
    private GetToIndex(key:TKey) {
        for (let i = 0; i < this.keys.length; i++) {
            if (this.keys[i] == key) {
                return i;
            }
        }
        return -1;
    }
    Add(key:TKey, value:TValue) {
        if (this.GetToIndex(key) == -1) {
            this.keys.push(key);
            this.values.push(value);
            return false;
        }
        return true;
    }
    Reomve(key:TKey) {
        let va = this.GetToIndex(key);
        if (va != -1) {
            this.keys.splice(va);
            this.values.splice(va);
            return true;
        }
        return false;
    }
}

export { Dict }