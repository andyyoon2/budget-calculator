print("Total spending in shared categories:")
total_spending = float(input())

print("인수 only:")
insoo_only = float(input())

print("재민 only:")
jaemin_only = float(input())

total_shared = total_spending - insoo_only - jaemin_only
print(f"total_shared: {total_shared}")

# TODO: Option to adjust from JK or to JK (usually will be from JK)
print("Refunds to different accounts:")
refunds = float(input())

print("Total from 재민 accounts:")
total_jaemin_accounts = float(input())

print("Total from 인수 accounts:")
total_insoo_accounts = float(input())

jaemin_withdraw = total_jaemin_accounts - jaemin_only + refunds
insoo_withdraw = total_insoo_accounts - insoo_only - refunds

print(f"Total for 재민 to withdraw from SoFi: {jaemin_withdraw}")
print(f"Total for 인수 to withdraw from SoFi: {insoo_withdraw}")

difference = total_shared - jaemin_withdraw - insoo_withdraw
if difference == 0:
    print("Everything added up!")
else:
    print(f"Something isn't right. ${difference} is unaccounted for.")
